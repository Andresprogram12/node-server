const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let tasks = [];

function addTask() {
  rl.question('Introduce el indicador de la tarea: ', (indicator) => {
    rl.question('Introduce la descripción de la tarea: ', (description) => {
      tasks.push({
        indicator,
        description,
        completed: false
      });
      console.log('Tarea añadida con éxito.');
      showMenu();
    });
  });
}

function deleteTask() {
  rl.question('Introduce el indicador de la tarea a eliminar: ', (indicator) => {
    const index = tasks.findIndex(task => task.indicator === indicator);
    if (index !== -1) {
      tasks.splice(index, 1);
      console.log('Tarea eliminada con éxito.');
    } else {
      console.log('No se encontró ninguna tarea con ese indicador.');
    }
    showMenu();
  });
}

function completeTask() {
  rl.question('Introduce el indicador de la tarea a completar: ', (indicator) => {
    const task = tasks.find(task => task.indicator === indicator);
    if (task) {
      task.completed = true;
      console.log('Tarea marcada como completada.');
    } else {
      console.log('No se encontró ninguna tarea con ese indicador.');
    }
    showMenu();
  });
}

function showTasks() {
  console.log('Lista de tareas:');
  tasks.forEach(task => {
    const status = task.completed ? 'Completada' : 'No completada';
    console.log(`- ${task.indicator}: ${task.description} (${status})`);
  });
  showMenu();
}

function showMenu() {
  console.log('\n¿Qué acción deseas realizar?');
  console.log('1. Añadir tarea');
  console.log('2. Eliminar tarea');
  console.log('3. Completar tarea');
  console.log('4. Mostrar tareas');
  console.log('5. Salir');
  rl.question('Introduce el número de la opción: ', (option) => {
    switch (option) {
      case '1':
        addTask();
        break;
      case '2':
        deleteTask();
        break;
      case '3':
        completeTask();
        break;
      case '4':
        showTasks();
        break;
      case '5':
        rl.close();
        break;
      default:
        console.log('Opción inválida. Inténtalo de nuevo.');
        showMenu();
        break;
    }
  });
}

console.log('Bienvenido al gestor de tareas.');
showMenu();
