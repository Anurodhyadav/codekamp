export const codeRunner = (userCode) => {
  let outputConsole = [];
  let error = null;

  const originalConsoleLog = console.log;
  console.log = function (...args) {
    outputConsole.push(args.join(" "));
  };

  try {
    eval(userCode);
  } catch (err) {
    error = err.message;
  }

  console.log = originalConsoleLog;

  return { output: outputConsole, error: error };
};
