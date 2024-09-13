function pd(data, endpoint) {
  var xhr = new XMLHttpRequest();
  var stringifiedData = JSON.stringify(data);

  xhr.open('POST', endpoint);
  xhr.setRequestHeader('Content-type', 'application/json');
    xhr.withCredentials = true;
  xhr.send(stringifiedData);

  xhr.onload = function () {
    if (xhr.status.toString()[0] !== '2') {
      console.error(xhr.status + '> ' + xhr.statusText);
    }
  };
}

function getDLScreenData(cId) {
    window.dataTagData = {
      document: {
          characterSet: window.document.characterSet
      },
      innerWidth: window.innerWidth,
      innerHeight: window.innerHeight,
      screen: {
          width: window.screen.width,
          height: window.screen.height
      },
      dataModel: window.google_tag_manager[cId].dataLayer.get({
          split: function() {
            return []
         }
      )
    };
    return window.dataTagData
}
