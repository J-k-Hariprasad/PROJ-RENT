import React, { useEffect, useState } from 'react';
import './AdminReviews.css';
import axios from 'axios';

function AdminReview() {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        // Fetch reviews from the backend
        const fetchReviews = async () => {
            try {
                const response = await axios.get('http://localhost:9001/review/getreview');
                setReviews(response.data);
            } catch (error) {
                console.error('Error fetching reviews:', error);
            }
        };

        fetchReviews();
    }, []);

    return (
        <div>

        <h2 className='head'>All User Reviews</h2>
        <div className="admin-reviews-container">
            <div className="admin-reviews-header">
            </div>
            <div className="reviews-list">
                {reviews.map((review, index) => (
                    <div key={index} className="review-card">
                        <h3>{review.username}</h3>
                        <p>Email: {review.usermail}</p>
                        <p>Review: {review.userReview}</p>
                        <div className="star-rating">
                            {Array(5).fill(false).map((_, i) => (
                                <span
                                key={i}
                                className={i < review.starrating ? 'star filled' : 'star'}
                                >★</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
                </div>
    );
}

export default AdminReview;
