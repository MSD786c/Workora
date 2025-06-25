#!/bin/bash

# Create directories if they don't exist
mkdir -p public/images/industries

# Download hero banner image
curl -o public/images/industries/hero-banner.jpg "https://images.unsplash.com/photo-1581094794329-c8112a89f12e?q=80&w=2070&auto=format&fit=crop"

# Download industry images
curl -o public/images/industries/oil-gas.jpg "https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=2071&auto=format&fit=crop"
curl -o public/images/industries/construction.jpg "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop"
curl -o public/images/industries/mep.jpg "https://images.unsplash.com/photo-1581092921461-39b99c0e473d?q=80&w=2070&auto=format&fit=crop"
curl -o public/images/industries/hospitality.jpg "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop"
curl -o public/images/industries/facility.jpg "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop"
curl -o public/images/industries/logistics.jpg "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop"
curl -o public/images/industries/healthcare.jpg "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?q=80&w=2070&auto=format&fit=crop"
curl -o public/images/industries/manufacturing.jpg "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?q=80&w=2070&auto=format&fit=crop"
curl -o public/images/industries/marine.jpg "https://images.unsplash.com/photo-1520931061294-db4b7afc8c86?q=80&w=2070&auto=format&fit=crop"

# Download CTA background
curl -o public/images/industries/cta-background.jpg "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop"

echo "All images downloaded successfully!" 