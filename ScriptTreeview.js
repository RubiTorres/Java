// Función para leer el archivo CSV y convertirlo en una estructura de árbol
function parseCSV(csvData) {
    const lines = csvData.split('\n');
    const tree = {};
  
    lines.forEach(line => {
      const data = line.split('|');
      let currentLevel = tree;
  
      data.forEach(item => {
        if (!currentLevel[item]) {
          currentLevel[item] = {};
        }
  
        currentLevel = currentLevel[item];
      });
    });
  
    return tree;
  }
  
  // Función para mostrar el árbol en el elemento treeview
  function displayTree(tree) {
    const ul = document.createElement('ul');
  
    for (const key in tree) {
      const li = document.createElement('li');
      li.textContent = key;
  
      if (Object.keys(tree[key]).length > 0) {
        li.appendChild(displayTree(tree[key]));
      }
  
      ul.appendChild(li);
    }
  
    return ul;
  }
  
  // Manejador de evento cuando se selecciona un archivo CSV
  function handleFileSelect(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
  
    reader.onload = function(e) {
      const csvData = e.target.result;
      const tree = parseCSV(csvData);
      const treeview = document.getElementById('treeview');
  
      while (treeview.firstChild) {
        treeview.firstChild.remove();
      }
  
      treeview.appendChild(displayTree(tree));
    };
  
    reader.readAsText(file);
  }
  
  // Evento de escucha para cuando se selecciona un archivo
  const fileInput = document.getElementById('csvFileInput');
  fileInput.addEventListener('change', handleFileSelect);
  