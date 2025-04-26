#!/bin/bash
sudo systemctl start postgresql
sudo systemctl start apache2
echo "✅ PostgreSQL y pgAdmin4 levantados. Accedé en http://localhost/pgadmin4"

