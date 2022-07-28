import Socials from '../assets/socials/Socials'

export default function Footer() {
    return (
        <footer className='profile-footer'>
            {Object.entries(Socials).map(social => {
                return <img src={social[1]} alt={social[0]+" Logo"}/>
            })}
        </footer>
    )
}