import { useTranslation } from 'react-i18next';
import './MediaShowcase.css';

import partnersImage from '../assets/images/KamalandRalph.jpeg';
import violetSapphireImage from '../assets/images/Violet Sapphire.jpeg';
import parcelImage from '../assets/images/gemstones.jpeg';

import gemMiningVideo from '../assets/vedios/gemmining.mp4';
import modernMiningVideo from '../assets/vedios/modernmining.mp4';
import sortingVideo from '../assets/vedios/Sorting.mp4';
import cuttingVideo from '../assets/vedios/BlueSapphireCut.mp4';

const MediaShowcase = () => {
  const { t } = useTranslation();

  const videoHighlights = [
    {
      title: 'River mining at dawn',
      subtitle: 'Washed gravels revealing sapphire rough.',
      src: gemMiningVideo,
      length: '0:22'
    },
    {
      title: 'Modern shaft work',
      subtitle: 'Mechanical lifts pulling pay dirt from depth.',
      src: modernMiningVideo,
      length: '0:19'
    },
    {
      title: 'Sorting fresh rough',
      subtitle: 'Identifying colors and shapes on site.',
      src: sortingVideo,
      length: '0:25'
    },
    {
      title: 'Hand cutting a sapphire',
      subtitle: 'Precision faceting for maximum fire.',
      src: cuttingVideo,
      length: '0:14'
    }
  ];

  const photoJournal = [
    {
      title: 'Partners at the mine',
      subtitle: 'Kamal & Ralph reviewing freshly washed parcels.',
      src: partnersImage
    },
    {
      title: 'Violet sapphire find',
      subtitle: 'A vivid violet stone under daylight.',
      src: violetSapphireImage
    },
    {
      title: 'Morning parcel',
      subtitle: 'Mixed rough sorted before grading and cutting.',
      src: parcelImage
    }
  ];

  return (
    <section className="media" id="media">
      <div className="media-watermark" aria-hidden="true">MEDIA</div>

      <div className="media-container">
        <div className="media-header">
          <span className="media-tag">{t('media.tag')}</span>
          <h2 className="media-title">{t('media.title')}</h2>
          <p className="media-subtitle">{t('media.subtitle')}</p>
        </div>

        <div className="media-main">
          <div className="media-column">
            <div className="media-column-head">
              <span className="media-chip">{t('media.videosTitle')}</span>
              <p className="media-column-subtitle">{t('media.videosSubtitle')}</p>
            </div>

            <div className="media-video-grid">
              {videoHighlights.map((video, index) => (
                <article key={index} className="media-video-card">
                  <div className="media-video-wrapper">
                    <video
                      src={video.src}
                      muted
                      loop
                      playsInline
                      controls
                      preload="metadata"
                    />
                    <span className="media-length">{video.length}</span>
                  </div>
                  <div className="media-video-meta">
                    <h3>{video.title}</h3>
                    <p>{video.subtitle}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="media-column">
            <div className="media-column-head">
              <span className="media-chip">{t('media.galleryTitle')}</span>
              <p className="media-column-subtitle">{t('media.gallerySubtitle')}</p>
            </div>

            <div className="media-photo-stack">
              {photoJournal.map((photo, index) => (
                <figure key={index} className="media-photo-card">
                  <img
                    src={photo.src}
                    alt={photo.title}
                    loading="lazy"
                    decoding="async"
                  />
                  <figcaption>
                    <h4>{photo.title}</h4>
                    <p>{photo.subtitle}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaShowcase;
