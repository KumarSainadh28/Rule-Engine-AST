document.getElementById('create-rule-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    const rule = document.getElementById('rule').value;
    const astOutput = document.getElementById('ast-output');
  
    // Simple AST representation logic
    astOutput.innerHTML = `
      <h5>AST Representation</h5>
      <p><strong>Rule:</strong> ${rule}</p>
      <pre>
        ├── Condition: ${rule.split(' AND ').join('<br>├── Condition: ')}
      </pre>
    `;
  });
  
  document.getElementById('evaluate-rule-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    const userData = document.getElementById('user-data').value;
    const astOutput = document.getElementById('ast-output');
  
    // This part can be expanded to include evaluation logic
    astOutput.innerHTML += `
      <h5>User Data:</h5>
      <pre>${userData}</pre>
      <p>The user data has been evaluated against the rule.</p>
    `;
  });
  
  document.getElementById('modify-rule-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    const modification = document.getElementById('modification').value;
    const astOutput = document.getElementById('ast-output');
  
    // Simple logic to update the AST with modifications
    astOutput.innerHTML += `
      <h5>Modification:</h5>
      <pre>${modification}</pre>
      <p>The rule has been modified.</p>
    `;
  });
  