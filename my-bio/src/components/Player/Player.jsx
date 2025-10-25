import React, { useState, useRef, useEffect } from 'react'
import styles from './Player.module.css'
import { BsFillPlayFill, BsFillPauseFill } from 'react-icons/bs'


const Player = ({ audioSrc }) => {
	const [isPlaying, setIsPlaying] = useState(false)
	const [currentTime, setCurrentTime] = useState(0)
	const [duration, setDuration] = useState(0)

	const audioRef = useRef(null)

	const handleSeek = (e) => {
		audioRef.current.currentTime = e.target.value;
		setCurrentTime(e.target.value);
	}

	const handleTimeUpdate = () => {
		setCurrentTime(audioRef.current.currentTime);
		setDuration(audioRef.current.duration);
	}

	const handlePlay = () => {
		audioRef.current.play();
		setIsPlaying(true)
	}

	const handlePause = () => {
		audioRef.current.pause();
		setIsPlaying(false)
	}

	const handlePlayPause = () => {
		if (isPlaying) {
			handlePause();
		} else {
			handlePlay();
		}
	}

	const formatDuration = (durationSeconds) => {
		const minutes = Math.floor(durationSeconds / 60);
		const seconds = Math.floor(durationSeconds % 60);
		const formattedSeconds = seconds.toString().padStart(2, '0');
		return `${minutes}:${formattedSeconds}`;
	}

	useEffect(() => {
		const audio = audioRef.current;

		const handleLoadedMetadata = () => {
			setDuration(Math.floor(audio.duration));
		};

		audio.addEventListener('loadedmetadata', handleLoadedMetadata);
		audio.addEventListener('timeupdate', handleTimeUpdate);

		return () => {
			audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
			audio.removeEventListener('timeupdate', handleTimeUpdate);
		};
	}, []);

	return (
		<div>
			<div className={styles.playerContainer}>
				<div className={styles.playerDetails}>
					<div className={styles.playerImg}> <img src="src/assets/musicimg.jpg" alt="musicimg" /> </div>
					<div className={styles.textinput}>
						<div className={styles.playerName}>cry of fear</div>
						<div className={styles.timelineContainer}>
							<span className={styles.timeStamp}>{formatDuration(currentTime)}</span>
							<input
								type="range"
								min="0"
								max={duration}
								value={currentTime}
								onChange={handleSeek}
							/>
							<span className={styles.timeStamp}>{formatDuration(duration)}</span>
						</div>
						<audio ref={audioRef} src={audioSrc} />
					</div>

					<button className={styles.playButton} onClick={handlePlayPause}>
						{isPlaying ? <BsFillPauseFill size={24} /> : <BsFillPlayFill size={24} />}
					</button>


				</div>
			</div>

		</div>
	)
}

export default Player
