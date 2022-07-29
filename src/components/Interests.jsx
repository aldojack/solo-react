export default function Interests() {
    const interests = ['Cooking', 'Football','Coding','Gaming','Watching MMA', 'General Techy-ness']
    return (
        <div className="profile-interests">
            <h2 className="interests-title">Interests</h2>
            <p className="interests-body">{interests.join(', ')}</p>
        </div>
    )
}