const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Lista de tareas
let tasks = [];

// Función para añadir una tarea a la lista
function addTask() {
  return new Promise((resolve, reject) => {
    rl.question('Indicador de la tarea: ', (indicator) => {
      rl.question('Descripción de la tarea: ', (description) => {
        tasks.push({ indicator, description, completed: false });
        resolve('Tarea añadida exitosamente.');
      });
    });
  });
}

// Función para eliminar una tarea de la lista
function removeTask() {
  return new Promise((resolve, reject) => {
    rl.question('Indicador de la tarea a eliminar: ', (indicator) => {
      const index = tasks.findIndex(task => task.indicator === indicator);
      if (index !== -1) {
        tasks.splice(index, 1);
        resolve('Tarea eliminada exitosamente.');
      } else {
        reject('No se encontró la tarea con el indicador proporcionado.');
      }
    });
  });
}

// Función para marcar una tarea como completada
function completeTask() {
  return new Promise((resolve, reject) => {
    rl.question('Indicador de la tarea a completar: ', (indicator) => {
      const task = tasks.find(task => task.indicator === indicator);
      if (task) {
        task.completed = true;
        resolve('Tarea completada exitosamente.');
      } else {
        reject('No se encontró la tarea con el indicador proporcionado.');
      }
    });
  });
}

// Función para mostrar el estado actual de la lista de tareas
function showTasks() {
  console.log('Lista de tareas:');
  tasks.forEach(task => {
    const status = task.completed ? 'Completada' : 'Pendiente';
    console.log(`${task.indicator}: ${task.description} (${status})`);
  });
}

// Función para mostrar el menú de opciones
function showMenu() {
  console.log('\n--- MENÚ ---');
  console.log('1. Añadir tarea');
  console.log('2. Eliminar tarea');
  console.log('3. Completar tarea');
  console.log('4. Mostrar tareas');
  console.log('5. Salir');

  rl.question('Seleccione una opción: ', async (option) => {
    switch (option) {
      case '1':
        try {
          const message = await addTask();
          console.log(message);
        } catch (error) {
          console.log('Error al añadir la tarea:', error);
        }
        showMenu();
        break;
      case '2':
        removeTask()
          .then(message => {
            console.log(message);
            showMenu();
          })
          .catch(error => {
            console.log('Error al eliminar la tarea:', error);
            showMenu();
          });
        break;
      case '3':
        try {
          const message = await completeTask();
          console.log(message);
        } catch (error) {
          console.log('Error al completar la tarea:', error);
        }
        showMenu();
        break;
      case '4':
        showTasks();
        showMenu();
        break;
      case '5':
        rl.close();
        break;
      default:
        console.log('Opción no válida. Intente nuevamente.');
        showMenu();
        break;
    }
  });
}

// Inicio del programa
console.log('Bienvenido a la lista de tareas.');

// Mostrar el menú inicial
showMenu();
