type LinkProps = {
  title: string;
  url: string;
  image?: string;
};

export default function LinkTreeBranch({ title, url, image }: LinkProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 w-full max-w-[100%] px-4 py-3 mb-4 bg-white/10 rounded-xl text-white hover:bg-white/20 transition"
    >
      {image && (
        <img src={image} alt={title} className="w-6 h-6 rounded" />
      )}
       <div className="flex-1 text-center">
        <span className="text-xl  font-medium">{title}</span>
      </div>
    </a>
  );
}
