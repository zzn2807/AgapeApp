import homeImage from "../img/home-image.jpg"
import crr_policy from "../files/Client_Rights_and_Responsibilities_Policy.pdf"
import grievance_policy from "../files/Grievance_Policy.pdf"
import "../css/Page.css"
function Home() {
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
            <img src={homeImage} className="content-img" />
            <h1>Welcome to Agape Health Systems!</h1>
            <p>Serving the Baltimore, Maryland area, Agape Health Systems is a place where your family's well-being is our top priority. We believe that love and life are precious gifts, and we are committed to making you feel welcome and comfortable from your very first visit. Whether you are looking for a new family doctor or expecting your first child, we strive to offer the finest care in pediatrics, adolescent, and adult medicine.</p>
            <h2>Services we provide:</h2>
            <div className="cards">
                <div className="card">
                    <h3>Annual Physical Exams (Adult and Children)</h3>
                    <p>Comprehensive checkups to assess overall health and detect issues early</p>
                </div>
                <div className="card">
                    <h3>Telehealth Visits</h3>
                    <p>Convenient virtual appointments for medical care from home</p>
                </div>
                <div className="card">
                    <h3>Well-Child Visits</h3>
                    <p>Routine exams to track growth, development, and preventative care in children</p>
                </div>
                <div className="card">
                    <h3>Immunizations and Vaccinations</h3>
                    <p>Protection against infectious diseases such as flu, Tdap, and COVID-19</p>
                </div>
                <div className="card">
                    <h3>School and Sports Physicals</h3>
                    <p>Required evaluations to ensure children are healthy and safe for school or athletic participation</p>
                </div>
                <div className="card">
                    <h3>Chronic Disease Management</h3>
                    <p>Ongoing care for conditions like diabetes, hypertension and asthma</p>
                </div>
                <div className="card">
                    <h3>Preventative Screenings</h3>
                    <p>Early detection of health risks through cholesterol, cancer, and other screenings</p>
                </div>
                <div className="card">
                    <h3>Same-Day Sick Visits</h3>
                    <p>Immediate care for sudden illnesses or urgent medical needs</p>
                </div>
                <div className="card">
                    <h3>Cold, Flu, and COVID-19 Testing</h3>
                    <p>Diagnostic testing to confirm viral infections and guide treatment</p>
                </div>
                <div className="card">
                    <h3>Sore Throat and Ear Infections</h3>
                    <p>Evaluation and treatment for common upper respiratory and ear issues</p>
                </div>
                <div className="card">
                    <h3>Urinary Tract Infections (UTIs)</h3>
                    <p>Testing and treatment for urinary discomfort or infection</p>
                </div>
                <div className="card">
                    <h3>Rash and Skin Condition Evaluations</h3>
                    <p>Diagnosis and treatment of skin concerns such as rashes and irritations</p>
                </div>
                <div className="card">
                    <h3>Weight Management</h3>
                    <p>Guidance and support for achieving and maintaining a healthy weight</p>
                </div>
                <div className="card">
                    <h3>Hormone Replacement Therapy</h3>
                    <p>Treatment to balance hormones and improve well-being</p>
                </div>
                <div className="card">
                    <h3>Smoking Cessation</h3>
                    <p>Programs and support to help patients quit tobacco use</p>
                </div>
                <div className="card">
                    <h3>Nutrition and Exercise Guidance</h3>
                    <p>Personalized advice for healthy lifestyle changes</p>
                </div>
                <div className="card">
                    <h3>Family Planning and Sexual Health Counseling</h3>
                    <p>Educatio and resources for reproductive health and safe practices</p>
                </div>
                <div className="card">
                    <h3>Depression and Anxiety Screening</h3>
                    <p>Early identification of mental health concerns to connect patients with care</p>
                </div>
                <div className="card">
                    <h3>ADHD Evaluation and Treatment</h3>
                    <p>Assessments and management strategies for attention-deficit/hyperactivity disorder</p>
                </div>
                <div className="card">
                    <h3>Stress Management</h3>
                    <p>Techniques and support to reduce stress and improve mental health</p>
                </div>
                <div className="card">
                    <h3>Referrals to Counseling or Psychiatry</h3>
                    <p>Connections to mental health specialists for further care</p>
                </div>
            </div>
            <a href={grievance_policy} download="Grievance Policy.pdf" onClick={() => { handleOpenPdf(cordova.file.applicationDirectory + "www/static/media/Grievance_Policy.9a57c2c73e091a70a3ac.pdf", "Grievance_Policy.pdf") }} className="btn" id="gPolicy">Grievance Policy</a>
            <a href={crr_policy} download="Client Rights and Responsibilities Policy.pdf" onClick={() => { handleOpenPdf(cordova.file.applicationDirectory + "www/static/media/Client_Rights_and_Responsibilities_Policy.867567c6ae0e9cb88b1f.pdf", "Client_Rights_and_Responsibilities_Policy.pdf") }} className="btn" id="crrPolicy">Client's Right and Responsibilities Policy</a>
        </div>
    )
}

export default Home;