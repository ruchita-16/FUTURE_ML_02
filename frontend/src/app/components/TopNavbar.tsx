import { Badge } from './ui/badge';
import { Avatar, AvatarFallback } from './ui/avatar';

interface TopNavbarProps {
  title: string;
}

export function TopNavbar({ title }: TopNavbarProps) {
  return (
    <div className="h-20 bg-white border-b border-gray-200 flex items-center justify-between px-8">
      <div className="flex items-center gap-4">
        <h2 className="text-2xl font-semibold text-gray-900">{title}</h2>
        <Badge className="bg-green-50 text-green-700 hover:bg-green-50 border-green-200 text-xs px-2.5 py-1">
          Model Active
        </Badge>
      </div>

      <Avatar className="h-10 w-10">
        <AvatarFallback className="bg-blue-100 text-blue-700">AD</AvatarFallback>
      </Avatar>
    </div>
  );
}