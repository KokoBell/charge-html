# Use nginx as the base image
FROM nginx:latest

# Copy all html files to nginx default public directory
COPY src/*.html /usr/share/nginx/html/

# Create a directory for assets and copy them
RUN mkdir /usr/share/nginx/html/assets
COPY assets/* /usr/share/nginx/html/assets/

# Create a directory for styles and copy them
RUN mkdir /usr/share/nginx/html/assets/styles
COPY assets/styles/login.css /usr/share/nginx/html/assets/styles/
COPY assets/styles/index.css /usr/share/nginx/html/assets/styles/
COPY assets/styles/global.css /usr/share/nginx/html/assets/styles/
COPY assets/styles/shop.css /usr/share/nginx/html/assets/styles/
COPY assets/styles/contact.css /usr/share/nginx/html/assets/styles/
COPY assets/styles/about.css /usr/share/nginx/html/assets/styles/

# Copy script.js to assets directory
COPY scripts/script.js /usr/share/nginx/html/assets/
COPY scripts/shop.js /usr/share/nginx/html/assets/

# Expose port 80
EXPOSE 80