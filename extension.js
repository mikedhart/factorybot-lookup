const vscode = require("vscode");

function activate(context) {
  console.log("HERER!!!");
  const provider1 = vscode.languages.registerCompletionItemProvider("ruby", {
    provideCompletionItems(document, position, token, context) {
      const completionItem = new vscode.CompletionItem("HelloRubyyyyyyyyy!");
      return [completionItem];
    },
  });
  context.subscriptions.push(provider1);
}

module.exports = {
  activate,
};
