import profilePicture from '../assets/profile.jpg'

export default function Info() {
    return (
        <div className="profile-header">
            <img className="profile-img" src={profilePicture} alt="Future web developer happy with UFC belt" />
            <h1 className="profile-title">Alan Jack</h1>
            <p className="profile-job-title">Student Web Developer</p>
            <a href="www.alan-jack.me" className='profile-website'>alan-jack.me</a>
            <div className='contact-btns'>
                <button className='contact-btn'>✉ Email</button>
                <button className='contact-btn linkedIn'><a href='https://www.linkedin.com/in/alan-jack/' target="_LIN" rel="noopener noreferrer">✉ LinkedIn</a></button>
            </div>
        </div>
    )
}