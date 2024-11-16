// GenericWidget.tsx
import React from 'react';
import { Card } from '@/components/ui/card'; // Supondo que você tenha um Card da Radix UI
import { Button } from './ui/button';

interface WidgetProps {
  title: string;
  value: string | number;
  description?: string;
  icon?: React.ReactNode;
  buttonLabel?: string;
  onButtonClick?: () => void;
}

const Widget: React.FC<WidgetProps> = ({ title, value, description, icon, buttonLabel, onButtonClick }) => {
  return (
    <Card className="p-4 bg-white shadow-md rounded-lg flex flex-col min-w-[200px] items-center justify-between">
      {/* Ícone opcional */}
      {icon && <div className="text-3xl mb-4">{icon}</div>}
      
      {/* Título */}
      <h2 className="text-lg font-semibold">{title}</h2>
      
      {/* Valor */}
      <p className="text-4xl font-bold my-2">{value}</p>
      
      {/* Descrição opcional */}
      {description && <p className="text-sm text-gray-500">{description}</p>}
      
      {/* Botão opcional */}
      {buttonLabel && onButtonClick && (
        <Button 
          onClick={onButtonClick} 
          className="bg-blue-500 text-white px-4 py-2 mt-4 rounded hover:bg-blue-600 transition"
        >
          {buttonLabel}
        </Button>
      )}
    </Card>
  );
};

export default Widget;
