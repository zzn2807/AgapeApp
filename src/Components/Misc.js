import phInfoImg from "../img/ph-info.jpg"
import "../css/Page.css"
import esmh101 from "../files/ESMH101.pdf"
import esmhflyer from "../files/ESMH Flyer.pdf"
import esmhQR from "../files/ESMH QR code Flyer.pdf"
import dinnerFlyer from "../files/Family enagagment dinner flyer.pdf"
import hhs_bss from "../files/HHS Behavioral Support Services.pdf"
function Misc() {
    const handleOpenPdf = (documentPath, filename) => {
        if (window.cordova) {
            window.resolveLocalFileSystemURL(documentPath, function (fileEntry) {
                window.resolveLocalFileSystemURL(cordova.file.externalDataDirectory, function (dirEntry) {
                    fileEntry.copyTo(dirEntry, filename, function (newFileEntry) {
                        cordova.plugins.fileOpener2.open(newFileEntry.nativeURL, 'application/pdf',
                            {
                                error: function (e) {
                                    console.log('Error status: ' + e.status + ' - Error message: ' + e.message);
                                },
                                success: function () {
                                    console.log('file opened successfully');
                                }
                            }
                        );
                    });
                });
            });


        }
    }
    return (
        <div className="content">
            <h1>Public Health Info</h1>
            
            <a href={esmh101} download="ESMH101.pdf" onClick={() => { handleOpenPdf(cordova.file.applicationDirectory + "www/static/media/ESMH101.afd0d2873858e5d20a8f.pdf", "ESMH101.pdf") }} className="btn" id="esmh101">ESMH 101</a>
            <a href={esmhflyer} download="ESMH Flyer.pdf" onClick={() => { handleOpenPdf(cordova.file.applicationDirectory + "www/static/media/ESMH Flyer.dc1740b2362b6ce1f01c.pdf", "ESMH Flyer.pdf") }} className="btn" id="esmhflyer">ESMH Flyer</a>
            <a href={esmhQR} download="ESMH QR code Flyer.pdf" onClick={() => { handleOpenPdf(cordova.file.applicationDirectory + "www/static/media/ESMH QR code Flyer.f2ed397c9dbb93c7c378.pdf", "ESMH QR code Flyer.pdf") }} className="btn" id="esmhQR">ESMH QR Codes</a>
            <a href={hhs_bss} download="HHS Behavioral Support Services.pdf" onClick={() => { handleOpenPdf(cordova.file.applicationDirectory + "www/static/media/HHS Behavioral Support Services.e046e187c6578064d016.pdf", "HHS Behavioral Support Services.pdf") }} className="btn" id="hhs_bss">HHS Behavioral Support Services</a>
            
            <h1>Events</h1>
            <a href={dinnerFlyer} download="Family enagagment dinner flyer.pdf" onClick={() => { handleOpenPdf(cordova.file.applicationDirectory + "www/static/media/Family enagagment dinner flyer.8ff9db53e1f587339399.pdf", "Family enagagment dinner flyer.pdf") }} className="btn" id="dinnerFlyer">ESMH QR Codes</a>
        </div>
    )
}

export default Misc;