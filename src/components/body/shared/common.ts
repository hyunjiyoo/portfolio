export function onCategory<T extends HTMLElement, K extends HTMLElement>(
  event: React.MouseEvent<T>,
  ref: React.RefObject<K>
  ) {
  const target = event.target as T;
  const selectedCategory = target.textContent?.toLowerCase();
  
  const items = ref.current?.childNodes as NodeListOf<K>;
  
  if (selectedCategory == null || items == null) {
    throw new Error('Invalid data: target.textContent or imgrefRef.current');
  }

  if (selectedCategory === 'all') {
    items.forEach((item: K) => {
      item.style.display = "block";
    });
  } 
  else {
    items.forEach((item: K) => {
      if (item.dataset.category === selectedCategory) {
        item.style.display = "block";
      } 
      else {
        item.style.display = "none";
      }
    });
  }
}