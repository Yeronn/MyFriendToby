export default function PetCard ({ petCardsInformation }) {
  return (
    <div className='pet-card-container'>
      {petCardsInformation.map((petCard) => (
        <div key={petCard.id} className='pet-card'>
          <span className='pet-card--name'>{petCard.name}</span>
          <span className='pet-card--image-container'><img src={petCard.urlImage} alt='' /></span>
        </div>
      ))}
    </div>
  )
}
