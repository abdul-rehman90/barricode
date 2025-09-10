'use client';
import React, { useState } from 'react';
import FeaturesFile from '../../../public/features.json';
// @ts-expect-error react-simple-maps type issue
import { ComposableMap, Geographies, Geography, GeographyProps, Marker } from 'react-simple-maps';

const MapLocation: React.FC = () => {
    const [isClicked, setIsClicked] = useState(true);

    const handleMarkerClick = (event: React.MouseEvent) => {
        event.stopPropagation();
        setIsClicked(true);
    };

    const handleMapClick = () => {
        setIsClicked(false);
    };

    // Marker data: [longitude, latitude]
    const locations = [
        { name: 'Bergen, Norway', coords: [5.325, 60.392] }, // Strandgaten 6
        { name: 'London, Britain', coords: [-0.081, 51.511] }, // 140 Fenchurch Street
        { name: 'Lisbon, Portugal', coords: [-9.148, 38.722] }, // R. Barata Salgueiro 5
        { name: 'Porto, Portugal', coords: [-8.611, 41.149] }, // R. do Campinho 11
        { name: 'Nice, France', coords: [7.265, 43.695] }, // 10 Av. Félix Faure
    ];

    return (
        <div className="fill-map" onClick={handleMapClick}>
            <ComposableMap projectionConfig={{ scale: 150 }}>

                <Geographies geography={FeaturesFile}>
                    {({ geographies }: { geographies: GeographyProps["geography"][] }) =>
                        geographies.map((geo) => (
                            <Geography
                                key={geo.rsmKey}
                                geography={geo}
                                style={{
                                    default: { fill: "#F3F3F5", outline: "none" },
                                    hover: { fill: "#b0b5bb", outline: "none" },
                                    pressed: { fill: "#9095aa", outline: "none" },
                                }}
                            />
                        ))
                    }
                </Geographies>

                {/* Animated ping markers */}
                {locations.map((loc, i) => (
                    <Marker
                        key={i}
                        coordinates={loc.coords}
                        onClick={handleMarkerClick}
                        className="cursor-pointer"
                    >
                        <g>
                            {/* Outer ping circle */}
                            <circle
                                r={6}
                                className="animate-ping"
                                fill="rgba(50, 122, 109, 0.25)" // soft green with transparency
                            />
                            {/* Inner solid circle */}
                            <circle r={3} fill="#327A6D" />
                        </g>
                    </Marker>
                ))}
            </ComposableMap>
        </div>
    );
};

export default MapLocation;
