import { $, getJSON, cart, formatCLP } from './utils.js';

window.addEventListener('DOMContentLoaded', async () => {
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
  const count = document.getElementById('cart-count');
  const updateCount = () => { if (count) count.textContent = cart.count(); };
  document.addEventListener('cart:change', updateCount); updateCount();
});