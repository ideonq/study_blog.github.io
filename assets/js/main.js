diff --git a/assets/js/main.js b/assets/js/main.js
new file mode 100644
index 0000000000000000000000000000000000000000..430ff3a841f492ebb8ed2f64e3190212e22ff8a8
--- /dev/null
+++ b/assets/js/main.js
@@ -0,0 +1,48 @@
+const body = document.body;
+const themeToggle = document.querySelector('.theme-toggle');
+const themeIcon = document.querySelector('.theme-icon');
+const currentYearEl = document.getElementById('current-year');
+
+function setTheme(theme) {
+  if (theme === 'light') {
+    body.classList.add('light-theme');
+    themeIcon.textContent = '☀️';
+  } else {
+    body.classList.remove('light-theme');
+    themeIcon.textContent = '🌙';
+  }
+  localStorage.setItem('theme', theme);
+}
+
+function toggleTheme() {
+  const isLight = body.classList.contains('light-theme');
+  setTheme(isLight ? 'dark' : 'light');
+}
+
+const savedTheme = localStorage.getItem('theme');
+if (savedTheme) {
+  setTheme(savedTheme);
+} else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
+  setTheme('light');
+} else {
+  setTheme('dark');
+}
+
+if (themeToggle) {
+  themeToggle.addEventListener('click', toggleTheme);
+}
+
+if (currentYearEl) {
+  currentYearEl.textContent = new Date().getFullYear();
+}
+
+document.querySelectorAll('a[href^="#"]').forEach(anchor => {
+  anchor.addEventListener('click', event => {
+    const targetId = anchor.getAttribute('href').slice(1);
+    const targetEl = document.getElementById(targetId);
+    if (targetEl) {
+      event.preventDefault();
+      targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
+    }
+  });
+});
