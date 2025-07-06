// Sample destination data
const destinations = [
  {
    id: 'bali',
    name: 'Bali, Indonesia',
    climate: 'tropical',
    activity: 'beach',
    budget: 'medium',
    description: 'Bali is known for its forested volcanic mountains, iconic rice paddies, beaches and coral reefs. It is a paradise for beach lovers and adventure seekers.',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    video: 'https://www.youtube.com/embed/5Q1R4A3Qy50'
  },
  {
    id: 'paris',
    name: 'Paris, France',
    climate: 'temperate',
    activity: 'culture',
    budget: 'high',
    description: 'Paris, the city of lights, is famous for its art, gastronomy, and culture. Visit the Eiffel Tower, museums, and enjoy world-class cuisine.',
    image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80',
    video: 'https://www.youtube.com/embed/Scxs7L0vhZ4'
  },
  {
    id: 'banff',
    name: 'Banff, Canada',
    climate: 'cold',
    activity: 'nature',
    budget: 'medium',
    description: 'Banff National Park offers stunning mountain scenery, crystal-clear lakes, and abundant wildlife. Perfect for nature lovers and adventure.',
    image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80',
    video: 'https://www.youtube.com/embed/8Qn_spdM5Zg'
  },
  {
    id: 'cape_town',
    name: 'Cape Town, South Africa',
    climate: 'temperate',
    activity: 'adventure',
    budget: 'low',
    description: 'Cape Town is a port city on South Africa's southwest coast, on a peninsula beneath the imposing Table Mountain. Known for adventure and nature.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    video: 'https://www.youtube.com/embed/2U6o5gYlCkA'
  }
];

// Handle recommendation form
const form = document.getElementById('preferenceForm');
if (form) {
  form.onsubmit = function(e) {
    e.preventDefault();
    const climate = form.elements['climate'].value;
    const activity = form.elements['activity'].value;
    const budget = form.elements['budget'].value;
    const results = destinations.filter(dest =>
      dest.climate === climate &&
      dest.activity === activity &&
      dest.budget === budget
    );
    displayRecommendations(results);
  };
}

function displayRecommendations(results) {
  const section = document.getElementById('recommendations');
  if (!section) return;
  section.innerHTML = '';
  if (results.length === 0) {
    section.innerHTML = '<p>No destinations found. Try different preferences!</p>';
    return;
  }
  results.forEach(dest => {
    const card = document.createElement('div');
    card.className = 'destination-card';
    card.innerHTML = `
      <h3>${dest.name}</h3>
      <img src="${dest.image}" alt="${dest.name}" style="max-width:100%;border-radius:8px;">
      <p>${dest.description}</p>
      <button onclick="showDetails('${dest.id}')" class="cta">View Details</button>
    `;
    section.appendChild(card);
  });
}

// Show details in a modal or inline (for simplicity, inline)
window.showDetails = function(id) {
  const dest = destinations.find(d => d.id === id);
  if (!dest) return;
  const section = document.getElementById('recommendations');
  section.innerHTML = `
    <h2>${dest.name}</h2>
    <img src="${dest.image}" alt="${dest.name}" style="max-width:100%;border-radius:8px;">
    <p>${dest.description}</p>
    <div style="margin:1em 0;">
      <iframe width="100%" height="315" src="${dest.video}" title="${dest.name} video" frameborder="0" allowfullscreen></iframe>
    </div>
    <button onclick="window.location.reload()" class="cta">Back to Recommendations</button>
  `;
}; 