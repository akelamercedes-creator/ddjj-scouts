// ================================================================
// SCOUTS DE ARGENTINA — Google Apps Script Backend v6
// ================================================================
// INSTRUCCIONES:
// 1. Reemplazar FOLDER_ID con el ID de tu carpeta en Google Drive
// 2. Implementar -> Nueva implementación -> Aplicación web
//    Ejecutar como: Yo | Acceso: Cualquier usuario
// ================================================================

const FOLDER_ID = "15fgwCMz2sZ2pdMcmETQmS0izgfeDYHKo";

function doGet(e) {
  var params = (e && e.parameter) ? e.parameter : {};

  // Recuperar URL de archivo ya subido
  if (params.action === "getUrl" && params.filename) {
    var key = "url_" + params.filename;
    var url = PropertiesService.getScriptProperties().getProperty(key);
    if (url) {
      PropertiesService.getScriptProperties().deleteProperty(key);
      return buildResponse({ success: true, url: url });
    }
    return buildResponse({ success: false, pending: true });
  }

  return buildResponse({ status: "ok", message: "Scouts DDJJ API v6" });
}

function doPost(e) {
  try {
    var base64PDF, fileName;
    var isForm = e.parameter && e.parameter.pdf;

    if (isForm) {
      base64PDF = e.parameter.pdf;
      fileName  = e.parameter.filename || ("ddjj_" + new Date().toISOString().replace(/[:.]/g,"-") + ".pdf");
    } else {
      if (!e.postData || !e.postData.contents)
        return buildResponse({ success: false, error: "Sin postData" });
      var data  = JSON.parse(e.postData.contents);
      base64PDF = data.pdf;
      fileName  = data.filename || ("ddjj_" + new Date().toISOString().replace(/[:.]/g,"-") + ".pdf");
    }

    if (base64PDF && base64PDF.indexOf("base64,") !== -1)
      base64PDF = base64PDF.split("base64,")[1];

    if (!base64PDF)
      return buildResponse({ success: false, error: "base64PDF vacío" });

    var decoded = Utilities.base64Decode(base64PDF);
    var blob    = Utilities.newBlob(decoded, "application/pdf", fileName);
    var folder  = DriveApp.getFolderById(FOLDER_ID);
    var file    = folder.createFile(blob);
    file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);

    var fileId  = file.getId();
    var viewUrl = "https://drive.google.com/file/d/" + fileId + "/view?usp=sharing";

    // Guardar URL para que el GET la pueda recuperar
    PropertiesService.getScriptProperties().setProperty("url_" + fileName, viewUrl);

    return buildResponse({ success: true, fileId: fileId, url: viewUrl, bytes: decoded.length });

  } catch (err) {
    return buildResponse({ success: false, error: String(err) });
  }
}

function buildResponse(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
