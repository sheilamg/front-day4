import { useState } from 'react';

const useEditReview = (url) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const editReview = async (reviewId, updatedData) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${url}/${reviewId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      });
      if (!response.ok) {
        throw new Error('Failed to update review');
      }
      // Handle post-update actions, like updating state or showing a message
      alert('Review updated successfully');
    } catch (err) {
      setError(err);
      console.error('Error updating review:', err);
    } finally {
      setLoading(false);
    }
  };

  return { editReview, loading, error };
};

export default useEditReview;
