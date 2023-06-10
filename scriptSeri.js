function serializeObject() {
    const inputObject = document.getElementById("inputObject").value;
    const serializedObject = JSON.stringify(inputObject);
    document.getElementById("outputObject").value = serializedObject;
  }
  
  function deserializeObject() {
    const serializedObject = document.getElementById("outputObject").value;
    const deserializedObject = JSON.parse(serializedObject);
    document.getElementById("deserializedObject").value = deserializedObject;
  }
  