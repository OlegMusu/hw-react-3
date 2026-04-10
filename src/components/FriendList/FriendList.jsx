function FriendList ({id, avatar, name, isOnline}) {
    return (
        <>
            <li key={id}>
                <img src={avatar} alt={name} width={150}/>
                <h2>{name}</h2>
                <p>•{isOnline}</p>
            </li>
        </>
    )
}

export default FriendList