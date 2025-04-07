// 等待DOM完全加载
document.addEventListener('DOMContentLoaded', function() {
  // 获取DOM元素
  const modal = document.getElementById("applyModal");
  const overlay = document.getElementById("overlay");
  const button = document.getElementById("applyButton");
  const closeBtn = document.querySelector(".close-btn");
  const fileInput = document.getElementById("resume");
  const fileName = document.getElementById("file-name");

  // 打开弹窗
  button.addEventListener("click", () => {
    modal.style.display = "block";
    overlay.style.display = "block";
  });

  // 关闭弹窗（点击×按钮）
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
    overlay.style.display = "none";
  });

  // 关闭弹窗（点击遮罩层）
  overlay.addEventListener("click", () => {
    modal.style.display = "none";
    overlay.style.display = "none";
  });

  // 文件选择事件：显示文件名
  fileInput.addEventListener("change", function() {
    fileName.textContent = this.files[0]?.name || "未选择文件";
  });
});