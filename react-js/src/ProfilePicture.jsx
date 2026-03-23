

function ProfilePicture(){
    const imageUrl='./src/assets/hero.png';
    const handleClick =(e) => e.target.style.display="none";

    return(<img onClick={(e) => handleClick(e)} src={imageUrl} alt="Profile"/>);
}

export default ProfilePicture