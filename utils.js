export const $ = (sel, root=document) => root.querySelector(sel);
export const getJSON = async (url) => (await fetch(url)).json();
export const formatCLP = n => n.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' });
export const cart = {
  key: 'tumarca_cart',
  read() { return JSON.parse(localStorage.getItem(this.key) || '[]'); },
  write(items) { localStorage.setItem(this.key, JSON.stringify(items)); },
  count() { return this.read().reduce((a, b) => a + (b.cant||0), 0); }
};