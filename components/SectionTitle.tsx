interface SectionTitleProps {
  title: string;
}

const SectionTitle = ({ title }: SectionTitleProps) => {
  return (
    <div className="mb-12 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 relative inline-block">
        {title}
        <div className="absolute left-1/2 -bottom-3 transform -translate-x-1/2 w-2/3 mx-auto">
          <div className="h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent rounded-full"></div>
        </div>
      </h2>
    </div>
  );
};

export default SectionTitle;
