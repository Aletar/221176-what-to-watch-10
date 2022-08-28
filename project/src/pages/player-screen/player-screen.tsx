import { useNavigate, useParams } from 'react-router-dom';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { selectDataLoadingInfo, selectFilm } from '../../store/app-data/selectors';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { fetchFilmAction } from '../../store/api-action';
import Loading from '../../components/loading/loading';
import LoadingScreen from '../loading-screen/loading-screen';
import { huminazeDurationInSeconds } from '../../utils';

function PlayerScreen(): JSX.Element {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const videoRef = useRef<HTMLVideoElement | null>(null);

  const film = useAppSelector(selectFilm);
  const { isFilmInfoLoading } = useAppSelector(selectDataLoadingInfo);

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const [progress, setProgress] = useState<number>(0);
  const [timeLeft, setTimeLeft] = useState<number>(0);

  useEffect(() => {
    dispatch(fetchFilmAction(params.id));
  }, [dispatch, params.id]);

  useEffect(() => {
    isPlaying
      ? videoRef.current?.play()
      : videoRef.current?.pause();
  }, [isPlaying]);

  const onLoadedMetadataHandler = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      setIsPlaying(true);
    }
  };

  const onVideoClickHandler = () => {
    setIsPlaying(!isPlaying);
  };

  const onTimeUpdateHandler = () => {
    if (videoRef.current) {
      const currentProgress = (videoRef.current?.currentTime / videoRef.current?.duration) * 100;
      setProgress(currentProgress);
      setTimeLeft(videoRef.current.duration - videoRef.current.currentTime);
    }
  };

  const onSeekingHandler = () => setIsLoading(true);

  const onSeekedHandler = () => setIsLoading(false);

  const onEndedHandler = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  };

  const onWaitingHandler = () => {
    setIsLoading(true);
  }

  const onCanPlayHandler = () => {
    setIsLoading(false);
  }

  const onExitButtonClickHandler = () => {
    const path = `/films/${film.id}`;
    navigate(path);
  };

  const onProgressChangeHandler = (evt: ChangeEvent<HTMLInputElement>) => {
    const value = Number(evt.target.value);
    if (videoRef.current) {
      videoRef.current.currentTime = (videoRef.current?.duration / 100) * value;
      setProgress(value);
    }
  };

  const onPlayButtonClickHandler = () => {
    setIsPlaying(!isPlaying);
  };

  const onFullScreenButtonClickHandler = () => {
    videoRef.current?.requestFullscreen();
  };

  if (isFilmInfoLoading) {
    return <LoadingScreen />;
  }

  if (!film.id) {
    return <NotFoundScreen />;
  }

  return (
    <div className="player">
      <video className="player__video"
        ref={videoRef}
        src={film.videoLink}
        poster={film.previewImage}
        onLoadedMetadata={onLoadedMetadataHandler}
        onClick={onVideoClickHandler}
        onTimeUpdate={onTimeUpdateHandler}
        onSeeking={onSeekingHandler}
        onSeeked={onSeekedHandler}
        onEnded={onEndedHandler}
        onWaiting={onWaitingHandler}
        onCanPlay={onCanPlayHandler}
      >
      </video>

      <button
        type="button"
        className="player__exit"
        onClick={onExitButtonClickHandler}
      >Exit
      </button>

      {isLoading && <span><Loading /></span>}

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <input
              className="player__progress"
              type="range"
              min="0"
              max="100"
              value={progress}
              onChange={(evt) => onProgressChangeHandler(evt)}
            />
            <progress className="player__progress"
              value={progress}
              max="100"
            />
          </div>
          <div className="player__time-value">-{huminazeDurationInSeconds(timeLeft)}</div>
        </div>

        <div className="player__controls-row">
          {
            isPlaying
              ? (
                <button
                  type="button"
                  className="player__play"
                  onClick={onPlayButtonClickHandler}
                >
                  <svg viewBox="0 0 14 21" width="14" height="21">
                    <use xlinkHref="#pause" />
                  </svg>
                  <span>Play</span>
                </button>)
              : (
                <button
                  type="button"
                  className="player__play"
                  onClick={onPlayButtonClickHandler}
                >
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>)
          }

          <div className="player__name">{film.name}</div>

          <button
            type="button"
            className="player__full-screen"
            onClick={onFullScreenButtonClickHandler}
          >
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default PlayerScreen;
