import myPhoto from '../../assets/my-photo.jpg';

export default function Header() {
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