window.TripHelperCharts = (() => {
  function renderExchangeChart(canvas, history, language, from, to) {
    if (!canvas || !history?.length) return;

    const container = canvas.parentElement;
    const width = container.clientWidth || 400;
    const height = 220;
    const dpr = window.devicePixelRatio || 1;
    const ctx = canvas.getContext("2d");
    const isDark = document.documentElement.getAttribute("data-theme") === "dark";
    const textColor = isDark ? "#cbd5e1" : "#64748b";
    const lineColor = isDark ? "#60a5fa" : "#2563eb";
    const fillColor = isDark ? "rgba(96, 165, 250, 0.12)" : "rgba(37, 99, 235, 0.12)";
    const borderColor = isDark ? "rgba(148, 163, 184, 0.24)" : "rgba(15, 23, 42, 0.1)";

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, width, height);

    const paddingX = 36;
    const paddingTop = 20;
    const paddingBottom = 42;
    const graphWidth = width - paddingX * 2;
    const graphHeight = height - paddingTop - paddingBottom;
    const min = Math.min(...history.map((item) => item.rate));
    const max = Math.max(...history.map((item) => item.rate));
    const range = max - min || 1;

    history.forEach((_, index) => {
      const y = paddingTop + (graphHeight / 4) * index;
      if (index <= 4) {
        ctx.strokeStyle = borderColor;
        ctx.beginPath();
        ctx.moveTo(paddingX, y);
        ctx.lineTo(width - paddingX, y);
        ctx.stroke();
      }
    });

    const points = history.map((item, index) => {
      const x = paddingX + (graphWidth / Math.max(history.length - 1, 1)) * index;
      const y = paddingTop + graphHeight - ((item.rate - min) / range) * graphHeight;
      return { ...item, x, y };
    });

    ctx.beginPath();
    points.forEach((point, index) => {
      if (index === 0) {
        ctx.moveTo(point.x, point.y);
      } else {
        ctx.lineTo(point.x, point.y);
      }
    });

    ctx.lineWidth = 3;
    ctx.strokeStyle = lineColor;
    ctx.stroke();

    ctx.lineTo(points[points.length - 1].x, height - paddingBottom);
    ctx.lineTo(points[0].x, height - paddingBottom);
    ctx.closePath();
    ctx.fillStyle = fillColor;
    ctx.fill();

    ctx.fillStyle = lineColor;
    points.forEach((point) => {
      ctx.beginPath();
      ctx.arc(point.x, point.y, 4, 0, Math.PI * 2);
      ctx.fill();
    });

    ctx.font = "11px sans-serif";
    ctx.fillStyle = textColor;
    ctx.textAlign = "center";
    ctx.textBaseline = "top";
    points.forEach((point, index) => {
      if (index === 0 || index === points.length - 1 || index % 2 === 0) {
        const label = point.date.slice(5).replace("-", "/");
        ctx.fillText(label, point.x, height - paddingBottom + 12);
      }
    });

    setupTooltip(canvas, container, points, language, from, to);
  }

  function setupTooltip(canvas, container, points, language, from, to) {
    let tooltip = container.querySelector(".chart-tooltip");
    if (!tooltip) {
      tooltip = document.createElement("div");
      tooltip.className = "chart-tooltip";
      container.appendChild(tooltip);
    }

    canvas.onmousemove = (event) => {
      const rect = canvas.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const closest = points.reduce((best, point) => {
        const distance = Math.abs(point.x - x);
        return distance < best.distance ? { point, distance } : best;
      }, { point: null, distance: Infinity }).point;

      if (!closest) return;

      const formattedRate = closest.rate.toLocaleString(language === "en" ? "en-US" : "ko-KR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 4,
      });

      tooltip.innerHTML = `
        <strong>${closest.date}</strong>
        <span>1 ${from} = ${formattedRate} ${to}</span>
      `;
      tooltip.style.opacity = "1";
      tooltip.style.left = `${Math.min(container.clientWidth - 140, Math.max(8, closest.x - 60))}px`;
      tooltip.style.top = `${Math.max(8, closest.y - 54)}px`;
    };

    canvas.onmouseleave = () => {
      tooltip.style.opacity = "0";
    };
  }

  return {
    renderExchangeChart,
  };
})();
