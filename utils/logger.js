// 🔄 Refactoro the Changer  
// Przenieś teraz odpowiednie wywołania logów z routing.js i zastąp tam logowanie bezpośrednie wywołaniem tych funkcji.

// utils/logger.js

function getInfoLog(req) {
  console.log(`INFO (${new Date(Date.now()).toUTCString()}): ${req.method} - ${req.url}`);
}

function getErrorLog(req) {
  console.error(`ERROR (${new Date(Date.now()).toUTCString()}): requested url ${req.url} doesn't exist.`);
}

function getProcessLog() {
  console.log("PROCESS: logout has been initiated and the application will be closed.");
}

module.exports = {
  getInfoLog,
  getErrorLog,/**/
  getProcessLog
};

