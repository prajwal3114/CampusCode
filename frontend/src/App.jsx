import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Layout from './components/common/Layout';
import UserGuard from './components/guards/UserGuard';
import OrganizerGuard from './components/guards/OrganizerGuard';
import Login from './pages/Login';
import Register from './pages/Register';
import OrganizerLogin from './pages/OrganizerLogin';
import OrganizerRegister from './pages/OrganizerRegister';
import Dashboard from './pages/Dashboard';
import Roadmaps from './pages/Roadmaps';
import CourseRoadmap from './pages/CourseRoadmap';
import Competitions from './pages/Competitions';
import Leaderboard from './pages/Leaderboard';
import Chat from './pages/Chat';
import Resources from './pages/Resources';
import Profile from './pages/Profile';
import Clubs from './pages/Clubs';
import ClubDashboard from './pages/ClubDashboard';
import ClubMembers from './pages/ClubMembers';
import ClubResources from './pages/ClubResources';
import ClubCompetitions from './pages/ClubCompetitions';
import ClubLeaderboard from './pages/ClubLeaderboard';
import ClubChat from './pages/ClubChat';
import OrganizerDashboard from './pages/OrganizerDashboard';
import OrganizerClubs from './pages/OrganizerClubs';
import CreateClub from './pages/CreateClub';
import ManageClub from './pages/ManageClub';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          {/* Public Auth Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/organizer/login" element={<OrganizerLogin />} />
          <Route path="/organizer/register" element={<OrganizerRegister />} />
          <Route path="/" element={<Navigate to="/login" replace />} />
          
          {/* User Routes */}
          <Route path="/*" element={
            <UserGuard>
              <Layout>
                <Routes>
                  <Route path="/dashboard" element={<Dashboard />} />
                  {/* Open Courses Routes */}
                  <Route path="/open-courses" element={<Roadmaps />} />
                  <Route path="/open-courses/:courseId" element={<CourseRoadmap />} />
                  <Route path="/open-courses/:courseId/competitions" element={<Competitions />} />
                  <Route path="/open-courses/:courseId/leaderboard" element={<Leaderboard />} />
                  <Route path="/open-courses/:courseId/chat" element={<Chat />} />
                  {/* Club Routes */}
                  <Route path="/clubs" element={<Clubs />} />
                  <Route path="/clubs/:clubId/dashboard" element={<ClubDashboard />} />
                  <Route path="/clubs/:clubId/members" element={<ClubMembers />} />
                  <Route path="/clubs/:clubId/resources" element={<ClubResources />} />
                  <Route path="/clubs/:clubId/competitions" element={<ClubCompetitions />} />
                  <Route path="/clubs/:clubId/leaderboard" element={<ClubLeaderboard />} />
                  <Route path="/clubs/:clubId/chat" element={<ClubChat />} />
                  {/* General Routes */}
                  <Route path="/resources" element={<Resources />} />
                  <Route path="/profile" element={<Profile />} />
                </Routes>
              </Layout>
            </UserGuard>
          } />

          {/* Organizer Routes */}
          <Route path="/organizer/*" element={
            <OrganizerGuard>
              <Layout>
                <Routes>
                  <Route path="/dashboard" element={<OrganizerDashboard />} />
                  <Route path="/clubs" element={<OrganizerClubs />} />
                  <Route path="/clubs/create" element={<CreateClub />} />
                  <Route path="/clubs/:clubId/manage" element={<ManageClub />} />
                  <Route path="/requests" element={<OrganizerDashboard />} />
                  <Route path="/resources" element={<OrganizerDashboard />} />
                </Routes>
              </Layout>
            </OrganizerGuard>
          } />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
