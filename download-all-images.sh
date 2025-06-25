#!/bin/bash

# Create directories if they don't exist
mkdir -p public/images/home
mkdir -p public/images/about
mkdir -p public/images/services
mkdir -p public/images/contact

# Home page images
curl -o public/images/home/hero.jpg "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop"
curl -o public/images/home/about-preview.jpg "https://images.unsplash.com/photo-1560264280-88b68371db39?q=80&w=2070&auto=format&fit=crop"
curl -o public/images/home/testimonial-bg.jpg "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2069&auto=format&fit=crop"
curl -o public/images/home/stats-bg.jpg "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop"

# About page images
curl -o public/images/about/hero.jpg "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?q=80&w=2071&auto=format&fit=crop"
curl -o public/images/about/team.jpg "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop"
curl -o public/images/about/office.jpg "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop"
curl -o public/images/about/values.jpg "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"

# Services page images
curl -o public/images/services/hero.jpg "https://images.unsplash.com/photo-1521791055366-0d553872125f?q=80&w=2069&auto=format&fit=crop"
curl -o public/images/services/construction.jpg "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop"
curl -o public/images/services/hospitality.jpg "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop"
curl -o public/images/services/cleaning.jpg "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070&auto=format&fit=crop"
curl -o public/images/services/logistics.jpg "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop"
curl -o public/images/services/events.jpg "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069&auto=format&fit=crop"
curl -o public/images/services/security.jpg "https://images.unsplash.com/photo-1617900906639-cab7adceb499?q=80&w=2070&auto=format&fit=crop"

# Contact page images
curl -o public/images/contact/hero.jpg "https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2074&auto=format&fit=crop"
curl -o public/images/contact/office-location.jpg "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"

echo "All images downloaded successfully!" 