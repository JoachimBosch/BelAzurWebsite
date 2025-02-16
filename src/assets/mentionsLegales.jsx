import { useContext } from "react";
import MyContext from "../context/context";

const MentionsLegales = () => {
    return (
        <div className="intro px-4 flex flex-col text-center content-center pb-20 text-belazurblue">
            <div>
                <h2>Mentions légales</h2>
                <h3>En vigueur au 01/01/2025</h3>
                <p className="pt-4">
                    Conformément aux dispositions de la loi n°2004-575 du 21
                    juin 2004 pour la Confiance en l’économie numérique, il est
                    porté à la connaissance des utilisateurs et visiteurs,
                    ci-après l' "Utilisateur", du site www.belazurcoding.com ,
                    ci-après le "Site", les présentes mentions légales.{" "}
                </p>
                <p className="pt-4">
                    La connexion et la navigation sur le Site par l’Utilisateur
                    implique acceptation intégrale et sans réserve des présentes
                    mentions légales.{" "}
                </p>
                <p className="pt-4">
                    Ces dernières sont accessibles sur le Site à la rubrique
                    "Mentions légales".
                </p>
            </div>
            <div className="pt-12 text-left">
                <h2 className="underline">Edition du site</h2>
                <p>
                    L'édition du Site est assurée par la société Joachim Bosch
                    Management, Sarl au capital de 5000 euros, immatriculée au
                    Registre du Commerce et des Sociétés de Manosque sous le
                    numéro 982898959 dont le siège social est situé au 101
                    Chemin de Courcousson, 04290 Volonne,
                </p>
                <p className="pt-4">Numéro de téléphone : 0626838554 </p>
                <p>Adresse e-mail : info@belazurcoding.com. </p>
                <p>N° de TVA intracommunautaire : FR00 982 898 959 </p>
                <p>Directeur de la publication : Joachim Bosch </p>
                <p className="pt-4">ci-après l'"Editeur".</p>
            </div>
            <div className="pt-12 text-left">
                <h2 className="underline">Hebergeur</h2>
                <p>
                    L'hébergeur du Site est la société GoDaddy LTD, dont le
                    siège social est situé au 2155 E GoDaddy Way 85280 Tempe,
                    États-Unis .
                </p>
            </div>
            <div className="pt-12 text-left">
                <h2 className="underline">Acces au site</h2>
                <p>
                    Le Site est normalement accessible, à tout moment, à
                    l'Utilisateur. Toutefois, l'Editeur pourra, à tout moment,
                    suspendre, limiter ou interrompre le Site afin de procéder,
                    notamment, à des mises à jour ou des modifications de son
                    contenu. L'Editeur ne pourra en aucun cas être tenu
                    responsable des conséquences éventuelles de cette
                    indisponibilité sur les activités de l'Utilisateur.
                </p>
                <p className="pt-4">ci-après l'"Editeur".</p>
            </div>
            <div className="pt-12 text-left">
                <h2 className="underline">Collecte des données</h2>
                <p>
                    Le Site assure à l'Utilisateur une collecte et un traitement
                    des données personnelles dans le respect de la vie privée
                    conformément à la loi n°78-17 du 6 janvier 1978 relative à
                    l'informatique, aux fichiers aux libertés et dans le respect
                    de la règlementation applicable en matière de traitement des
                    données à caractère personnel conformément au règlement (UE)
                    2016/679 du Parlement européen et du Conseil du 27 avril
                    2016 (ci-après, ensemble, la "Règlementation applicable en
                    matière de protection des Données à caractère personnel").</p>
                    <p className="pt-4">
                    En vertu de la Règlementation applicable en matière de
                    protection des Données à caractère personnel, l'Utilisateur
                    dispose d'un droit d'accès, de rectification, de suppression
                    et d'opposition de ses données personnelles. L'Utilisateur
                    peut exercer ce droit :</p>
                    <p className="pt-4"> • par mail à l'adresse email
                    info@belazurcoding.com </p>
                    <p className="pt-4">• depuis le formulaire de contact ;</p>
                    <p className="pt-4">
                    Toute utilisation, reproduction, diffusion,
                    commercialisation, modification de toute ou partie du Site,
                    sans autorisation expresse de l’Editeur est prohibée et
                    pourra entraîner des actions et poursuites judiciaires
                    telles que prévues par la règlementation en vigueur. </p>
                    <p className="pt-4">Pour
                    plus d’informations, se reporter aux CGU du site
                    www.belazurcoding.com accessibles depuis la rubrique "CGU" .</p>
                    <p className="pt-4">
                    Pour plus d'informations en matière de cookies, se reporter
                    à la Charte en matière de cookies du site
                    www.belazurcoding.com accessible à la rubrique 
                    "Cookies"
                </p>
            </div>
        </div>
    );
};

export default MentionsLegales;
