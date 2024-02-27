function createAttributionPopup() {
    const elt = document.createElement('div');
    elt.innerHTML="Design by <a href='https://www.behance.net/gallery/63901069/Barts-Simple-Minimal-Portfolio-Website' target='_blank'>Mehmet Zinnur Öcal</a>";
    elt.style.position = 'fixed';
    elt.style.bottom = 0;
    elt.style.right = '5px';
    elt.style.fontSize = '12px';
    elt.style.lineHeight = '24px';
    elt.style.backgroundColor = '#fff';
    elt.style.boxShadow = '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)';
    elt.style.padding = '5px 10px';
    elt.style.borderRadius = '5px 5px 0 0';
    return elt;
  }
  
  document.body.append(createAttributionPopup())