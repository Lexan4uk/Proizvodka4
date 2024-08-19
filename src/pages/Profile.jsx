import '@styles/pages/Profile.scss';
import { simpleGet, apiTags } from "@api/simpleGet"
import Footer from '@components/Footer';



function Profile() {
    
    
    return (
        <>
        <main className="profile">
            <div className="profile__content block-normalizer f-column">

            </div>
        </main>
        <Footer active={2} />
        </>
    )
}
export default Profile;