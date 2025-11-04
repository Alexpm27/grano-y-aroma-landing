// Helper para obtener la ruta correcta de los assets
export const getAssetPath = (path) => {
  const base = import.meta.env.BASE_URL;
  // Remover el / inicial si existe
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${base}${cleanPath}`;
};
