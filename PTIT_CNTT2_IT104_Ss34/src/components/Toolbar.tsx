import { Button, TextField } from '@mui/material';
import React from 'react';

export interface ToolbarProps {
  onSearch: (keyword: string) => void;
}

const Toolbar: React.FC<ToolbarProps> = ({ onSearch }) => {
  const [keyword, setKeyword] = React.useState<string>("");

  const handleSearchClick = (): void => {
    onSearch(keyword);
  };

  const handleKeywordChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setKeyword(e.target.value);
  };

  return (
    <div className="flex justify-between mb-4">
      <Button variant="contained" color="primary">
        Thêm mới sinh viên
      </Button>
      <div className="flex gap-2">
        <TextField
          size="small"
          placeholder="Tìm theo họ tên..."
          value={keyword}
          onChange={handleKeywordChange}
        />
        <Button variant="contained" onClick={handleSearchClick}>
          Tìm kiếm
        </Button>
      </div>
    </div>
  );
};

export default Toolbar;
