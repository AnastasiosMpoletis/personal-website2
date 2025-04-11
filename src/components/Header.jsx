import logoImg from '../assets/ab-logo.png';
import myPhoto from '../assets/my-photo.jpg';

export default function Header({ isPinned }) {
    return (
        <>
            {/* <div id='logo'>
                <img src={logoImg} alt="Anastasios Boletis logo" />
            </div> */}
            <header>
                <img src={myPhoto} />
                <h1>Anastasios Boletis</h1>
            </header>
        </>
    );
}