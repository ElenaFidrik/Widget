import React, { FC } from "react";
import { LocationTableProps } from '../../type';

export const FavoritesCity: FC<LocationTableProps> = ({locations, onSelect}) =>
  <div>
      {locations.map(location =>
        <div key={location.id}
            onClick={() => onSelect(location)}>
          <div>{location.name}</div>
        </div>
      )}
  </div>;