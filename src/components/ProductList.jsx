import React from 'react';
import { useSelector } from 'react-redux';
import PlantCard from './PlantCard';

const ProductList = () => {
  const plants = useSelector(state => state.plants.plants);

  // Group plants by category
  const groupedPlants = plants.reduce((groups, plant) => {
    groups[plant.category] = groups[plant.category] || [];
    groups[plant.category].push(plant);
    return groups;
  }, {});

  return (
    <div style={{ padding: '20px' }}>
      {Object.entries(groupedPlants).map(([category, plants]) => (
        <div key={category} style={{ marginBottom: '30px' }}>
          <h2>{category}</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {plants.map(plant => (
              <PlantCard key={plant.id} plant={plant} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
