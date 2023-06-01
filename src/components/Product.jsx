export default function Product(props) {
  const {
    mainId: id,
    displayName: name,
    displayDescription: description,
    price: priceList,
    displayAssets: imageList,
  } = props;

  console.log(imageList);
  const { finalPrice: price } = priceList;
  const { background: image } = imageList[0];
  return (
    <>
      <div className="card" id={id}>
        <div className="card-image">
          <img src={image} alt={name} />
          <span className="card-title">{name}</span>
        </div>
        <div className="card-content">
          <p>{description}</p>
        </div>
        <div className="card-action">
          <button className="btn">Купить</button>
          <span className="right" style={{ fontSize: '1.8rem' }}>
            {price} руб.
          </span>
        </div>
      </div>
    </>
  );
}

const arr = {
  mainId: 'RenegadeRaiderFire_Bundle',
  displayName: 'Комплект «Дикое пламя»',
  displayDescription: '',
  displayType: 'Предметы в комплекте: 5',
  mainType: 'bundle',
  offerId:
    'v2:/87a5efc4e012ce859fbdc84677f6bff9de3e6d6cc7f94db67cba7a3ef402eb03',
  displayAssets: [
    {
      displayAsset: 'DAv2_Bundle_Featured_RenegadeRaiderFire',
      materialInstance: 'MI_Bundle_Featured_RenegadeRaiderFire',
      url: 'https://media.fortniteapi.io/images/displayAssets/v2/DAv2_Bundle_Featured_RenegadeRaiderFire/MI_Bundle_Featured_RenegadeRaiderFire.png',
      flipbook: null,
      background_texture: null,
      background:
        'https://media.fortniteapi.io/images/shop/87a5efc4e012ce859fbdc84677f6bff9de3e6d6cc7f94db67cba7a3ef402eb03/v2/MI_Bundle_Featured_RenegadeRaiderFire/background.png',
      full_background:
        'https://media.fortniteapi.io/images/shop/87a5efc4e012ce859fbdc84677f6bff9de3e6d6cc7f94db67cba7a3ef402eb03/v2/MI_Bundle_Featured_RenegadeRaiderFire/info.ru.png',
    },
  ],
  firstReleaseDate: '2023-01-15',
  previousReleaseDate: '2023-04-24',
  giftAllowed: true,
  buyAllowed: true,
  price: {
    regularPrice: 3300,
    finalPrice: 2000,
    floorPrice: 200,
  },
  rarity: {
    id: 'Legendary',
    name: 'ЛЕГЕНДАРНЫЙ',
  },
  series: {
    id: 'LavaSeries',
    name: 'Лавовая серия',
  },
  banner: {
    id: 'vbucksoff',
    name: 'Скидка: 1300 В-баксов',
    intensity: 'Low',
  },
  offerTag: null,
  granted: [
    {
      id: 'CID_784_Athena_Commando_F_RenegadeRaiderFire',
      type: {
        id: 'outfit',
        name: 'Экипировка',
      },
      name: 'Вспышка',
      description: 'Незаметной её точно не назовёшь.',
      rarity: {
        id: 'Legendary',
        name: 'ЛЕГЕНДАРНЫЙ',
      },
      series: {
        id: 'LavaSeries',
        name: 'Лавовая серия',
      },
      images: {
        icon: 'https://media.fortniteapi.io/images/61353db005257542ce48c83d2485a24d/transparent.png',
        featured:
          'https://media.fortniteapi.io/images/61353db005257542ce48c83d2485a24d/full_featured.png',
        background:
          'https://media.fortniteapi.io/images/cosmetics/61353db005257542ce48c83d2485a24d/v2/background.png',
        icon_background:
          'https://media.fortniteapi.io/images/cosmetics/61353db005257542ce48c83d2485a24d/v2/icon_background.png',
        full_background:
          'https://media.fortniteapi.io/images/cosmetics/61353db005257542ce48c83d2485a24d/v2/info.ru.png',
      },
      video: null,
      audio: null,
      gameplayTags: [
        'Cosmetics.Source.ItemShop',
        'Cosmetics.Filter.Season.13',
        'Cosmetics.Set.OutlawFire',
        'SoundLibrary.ID.StepType.BootsCombat',
        'SoundLibrary.ID.ClothingType.GearTactical',
        'SoundLibrary.ID.HandType.Glove',
      ],
      set: {
        id: 'OutlawFire',
        name: 'Дикое пламя',
        partOf: 'Входит в набор «Дикое пламя».',
      },
    },
    {
      id: 'BID_545_RenegadeRaiderFire',
      type: {
        id: 'backpack',
        name: 'Украшение на спину',
      },
      name: 'Огненный шар',
      description: 'Внимание: При неумелом обращении можно получить ожог.',
      rarity: {
        id: 'Legendary',
        name: 'ЛЕГЕНДАРНЫЙ',
      },
      series: {
        id: 'LavaSeries',
        name: 'Лавовая серия',
      },
      images: {
        icon: 'https://media.fortniteapi.io/images/65a4013d96c8670f530f6ce5c117b913/transparent.png',
        featured: null,
        background:
          'https://media.fortniteapi.io/images/cosmetics/65a4013d96c8670f530f6ce5c117b913/v2/background.png',
        icon_background:
          'https://media.fortniteapi.io/images/cosmetics/65a4013d96c8670f530f6ce5c117b913/v2/icon_background.png',
        full_background:
          'https://media.fortniteapi.io/images/cosmetics/65a4013d96c8670f530f6ce5c117b913/v2/info.ru.png',
      },
      video: null,
      audio: null,
      gameplayTags: [
        'Cosmetics.Source.ItemShop',
        'Cosmetics.Filter.Season.13',
        'Cosmetics.Set.OutlawFire',
      ],
      set: {
        id: 'OutlawFire',
        name: 'Дикое пламя',
        partOf: 'Входит в набор «Дикое пламя».',
      },
    },
    {
      id: 'Pickaxe_RenegadeRaider_Spark',
      type: {
        id: 'pickaxe',
        name: 'Инструмент',
      },
      name: 'Калёная кирка',
      description: 'Смотри не обожгись!',
      rarity: {
        id: 'Uncommon',
        name: 'НЕОБЫЧНЫЙ',
      },
      series: null,
      images: {
        icon: 'https://media.fortniteapi.io/images/1b797f7325f705c4eaec66c91dde5e4e/transparent.png',
        featured:
          'https://media.fortniteapi.io/images/1b797f7325f705c4eaec66c91dde5e4e/full_featured.png',
        background:
          'https://media.fortniteapi.io/images/cosmetics/1b797f7325f705c4eaec66c91dde5e4e/v2/background.png',
        icon_background:
          'https://media.fortniteapi.io/images/cosmetics/1b797f7325f705c4eaec66c91dde5e4e/v2/icon_background.png',
        full_background:
          'https://media.fortniteapi.io/images/cosmetics/1b797f7325f705c4eaec66c91dde5e4e/v2/info.ru.png',
      },
      video: null,
      audio: null,
      gameplayTags: [
        'Cosmetics.Filter.Season.22',
        'Cosmetics.Source.Event.RebootRally',
        'Cosmetics.Set.OutlawFire',
      ],
      set: {
        id: 'OutlawFire',
        name: 'Дикое пламя',
        partOf: 'Входит в набор «Дикое пламя».',
      },
    },
    {
      id: 'Glider_RustyRaider_Spark',
      type: {
        id: 'glider',
        name: 'Дельтаплан',
      },
      name: 'Раскалённый дельтаплан',
      description: 'Невозможно дотронуться.',
      rarity: {
        id: 'Rare',
        name: 'РЕДКИЙ',
      },
      series: null,
      images: {
        icon: 'https://media.fortniteapi.io/images/3fc3ba631f89e67b7ce92d67b991c92d/transparent.png',
        featured:
          'https://media.fortniteapi.io/images/3fc3ba631f89e67b7ce92d67b991c92d/full_featured.png',
        background:
          'https://media.fortniteapi.io/images/cosmetics/3fc3ba631f89e67b7ce92d67b991c92d/v2/background.png',
        icon_background:
          'https://media.fortniteapi.io/images/cosmetics/3fc3ba631f89e67b7ce92d67b991c92d/v2/icon_background.png',
        full_background:
          'https://media.fortniteapi.io/images/cosmetics/3fc3ba631f89e67b7ce92d67b991c92d/v2/info.ru.png',
      },
      video: null,
      audio: null,
      gameplayTags: [
        'Cosmetics.Filter.Season.22',
        'Cosmetics.Source.Event.RebootRally',
        'Cosmetics.Set.OutlawFire',
      ],
      set: {
        id: 'OutlawFire',
        name: 'Дикое пламя',
        partOf: 'Входит в набор «Дикое пламя».',
      },
    },
    {
      id: 'Wrap_RenegadeRaiderSpark',
      type: {
        id: 'wrap',
        name: 'Обёртка',
      },
      name: 'Свежая ковка',
      description: 'Выберите свой стиль.',
      rarity: {
        id: 'Rare',
        name: 'РЕДКИЙ',
      },
      series: null,
      images: {
        icon: 'https://media.fortniteapi.io/images/92317bcb209581a8c1e1eb622278832d/transparent.png',
        featured:
          'https://media.fortniteapi.io/images/92317bcb209581a8c1e1eb622278832d/full_featured.png',
        background:
          'https://media.fortniteapi.io/images/cosmetics/92317bcb209581a8c1e1eb622278832d/v2/background.png',
        icon_background:
          'https://media.fortniteapi.io/images/cosmetics/92317bcb209581a8c1e1eb622278832d/v2/icon_background.png',
        full_background:
          'https://media.fortniteapi.io/images/cosmetics/92317bcb209581a8c1e1eb622278832d/v2/info.ru.png',
      },
      video: null,
      audio: null,
      gameplayTags: [
        'Cosmetics.Filter.Season.22',
        'Cosmetics.Set.OutlawFire',
        'Cosmetics.UserFacingFlags.Wrap.Animated',
        'Cosmetics.UserFacingFlags.Reactive.WeaponFire',
      ],
      set: {
        id: 'OutlawFire',
        name: 'Дикое пламя',
        partOf: 'Входит в набор «Дикое пламя».',
      },
    },
  ],
  priority: -1,
  section: {
    id: 'Featured',
    name: 'Рекомендуемое',
    landingPriority: 65,
  },
  groupIndex: 0,
  storeName: 'BRWeeklyStorefront',
  tileSize: 'DoubleWide',
  categories: ['Panel01'],
};
