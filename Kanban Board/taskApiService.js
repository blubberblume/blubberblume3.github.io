(function() {
  const web_api = "https://f73webapi.azurewebsites.net/api/Items";
  const app_ID = 2107;

  async function write(param) {
    let mood = {
      appId: app_ID,
      key: param.key,
      value: param.value,
      isComplete: param.isAssigned
    };

    let response = await fetch(web_api, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(mood)
    });
    let result = await response.json();
    return result;
  }

  window.taskApiService = {
    write
  };
})();
