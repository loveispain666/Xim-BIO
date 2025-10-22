import React from 'react'
import styles from './Profile.module.css'
import avatar from '../../assets/avatar.jpg'

const Profile = () => {
	return (
		<div>
			<div className={styles.profileContainer}>
				<div className={styles.profileDetails}>
					<div className={styles.profileAvatar}>
						<img src={avatar} alt='failed load' />
					</div>
					<div className={styles.profileName}>Xim</div>
					<div className={styles.profileDescription}>
						Python | React | Node.js | SQL | PostgreSQL | Figma | UI/UX
					</div>
				</div>
			</div>
		</div>
	)
}

export default Profile
